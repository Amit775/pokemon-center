import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionsCreateInput } from "../../../inputs/EncounterConditionsCreateInput";
import { EncounterConditionsUpdateInput } from "../../../inputs/EncounterConditionsUpdateInput";
import { EncounterConditionsWhereUniqueInput } from "../../../inputs/EncounterConditionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEncounterConditionsArgs {
  @TypeGraphQL.Field(_type => EncounterConditionsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionsCreateInput, {
    nullable: false
  })
  create!: EncounterConditionsCreateInput;

  @TypeGraphQL.Field(_type => EncounterConditionsUpdateInput, {
    nullable: false
  })
  update!: EncounterConditionsUpdateInput;
}
