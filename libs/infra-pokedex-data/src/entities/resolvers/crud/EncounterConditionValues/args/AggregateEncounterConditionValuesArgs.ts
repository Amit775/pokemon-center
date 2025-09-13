import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionValuesOrderByWithRelationInput } from "../../../inputs/EncounterConditionValuesOrderByWithRelationInput";
import { EncounterConditionValuesWhereInput } from "../../../inputs/EncounterConditionValuesWhereInput";
import { EncounterConditionValuesWhereUniqueInput } from "../../../inputs/EncounterConditionValuesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEncounterConditionValuesArgs {
  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereInput, {
    nullable: true
  })
  where?: EncounterConditionValuesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EncounterConditionValuesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereUniqueInput, {
    nullable: true
  })
  cursor?: EncounterConditionValuesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
