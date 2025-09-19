import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodUpdateInput } from "../../../inputs/EncounterMethodUpdateInput";
import { EncounterMethodWhereUniqueInput } from "../../../inputs/EncounterMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEncounterMethodArgs {
  @TypeGraphQL.Field(_type => EncounterMethodUpdateInput, {
    nullable: false
  })
  data!: EncounterMethodUpdateInput;

  @TypeGraphQL.Field(_type => EncounterMethodWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterMethodWhereUniqueInput;
}
