import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodsUpdateManyMutationInput } from "../../../inputs/EncounterMethodsUpdateManyMutationInput";
import { EncounterMethodsWhereInput } from "../../../inputs/EncounterMethodsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEncounterMethodsArgs {
  @TypeGraphQL.Field(_type => EncounterMethodsUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterMethodsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EncounterMethodsWhereInput, {
    nullable: true
  })
  where?: EncounterMethodsWhereInput | undefined;
}
