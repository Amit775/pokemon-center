import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterConditionsUpdateInput } from "../../../inputs/EncounterConditionsUpdateInput";
import { EncounterConditionsWhereUniqueInput } from "../../../inputs/EncounterConditionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEncounterConditionsArgs {
  @TypeGraphQL.Field(_type => EncounterConditionsUpdateInput, {
    nullable: false
  })
  data!: EncounterConditionsUpdateInput;

  @TypeGraphQL.Field(_type => EncounterConditionsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionsWhereUniqueInput;
}
