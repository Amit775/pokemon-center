import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodsUpdateManyMutationInput } from "../../../inputs/VersionGroupPokemonMoveMethodsUpdateManyMutationInput";
import { VersionGroupPokemonMoveMethodsWhereInput } from "../../../inputs/VersionGroupPokemonMoveMethodsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVersionGroupPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereInput, {
    nullable: true
  })
  where?: VersionGroupPokemonMoveMethodsWhereInput | undefined;
}
