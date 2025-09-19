import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AbilityUpdateManyMutationInput } from "../../../inputs/AbilityUpdateManyMutationInput";
import { AbilityWhereInput } from "../../../inputs/AbilityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAbilityArgs {
  @TypeGraphQL.Field(_type => AbilityUpdateManyMutationInput, {
    nullable: false
  })
  data!: AbilityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AbilityWhereInput, {
    nullable: true
  })
  where?: AbilityWhereInput | undefined;
}
