import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValueOrderByWithRelationInput } from "../../../inputs/EncounterConditionValueOrderByWithRelationInput";
import { EncounterConditionValueWhereInput } from "../../../inputs/EncounterConditionValueWhereInput";
import { EncounterConditionValueWhereUniqueInput } from "../../../inputs/EncounterConditionValueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEncounterConditionValueArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterConditionValueOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterConditionValueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
