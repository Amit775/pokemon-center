import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterUpdateManyMutationInput } from "../../../inputs/EncounterUpdateManyMutationInput";
import { EncounterWhereInput } from "../../../inputs/EncounterWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEncounterArgs {
  @TypeGraphQL.Field(_type => EncounterUpdateManyMutationInput, {
    nullable: false
  })
  data!: EncounterUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EncounterWhereInput, {
    nullable: true
  })
  where?: EncounterWhereInput | undefined;
}
