import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionOrderByWithRelationInput } from "../../../inputs/EncounterConditionOrderByWithRelationInput";
import { EncounterConditionWhereInput } from "../../../inputs/EncounterConditionWhereInput";
import { EncounterConditionWhereUniqueInput } from "../../../inputs/EncounterConditionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEncounterConditionArgs {
  @TypeGraphQL.Field(_type => EncounterConditionWhereInput, {
    nullable: true
  })
  where?: EncounterConditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterConditionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterConditionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
