import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodUpdateManyMutationInput } from "../../../inputs/EncounterMethodUpdateManyMutationInput";
import { EncounterMethodWhereInput } from "../../../inputs/EncounterMethodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEncounterMethodArgs {
  @TypeGraphQL.Field(_type => EncounterMethodUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterMethodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EncounterMethodWhereInput, {
    nullable: true
  })
  where?: EncounterMethodWhereInput | undefined;
}
