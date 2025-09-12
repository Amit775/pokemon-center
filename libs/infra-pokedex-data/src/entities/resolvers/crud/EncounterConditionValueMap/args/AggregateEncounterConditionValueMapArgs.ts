import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueMapOrderByWithRelationInput } from "../../../inputs/EncounterConditionValueMapOrderByWithRelationInput";
import { EncounterConditionValueMapWhereInput } from "../../../inputs/EncounterConditionValueMapWhereInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../../../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEncounterConditionValueMapArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValueMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterConditionValueMapOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterConditionValueMapWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
