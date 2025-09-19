import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterUpdateInput } from "../../../inputs/EncounterUpdateInput";
import { EncounterWhereUniqueInput } from "../../../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEncounterArgs {
  @TypeGraphQL.Field(_type => EncounterUpdateInput, {
    nullable: false
  })
  data!: EncounterUpdateInput;

  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;
}
