import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodUpdateManyMutationInput } from "../../../inputs/VersionGroupPokemonMoveMethodUpdateManyMutationInput";
import { VersionGroupPokemonMoveMethodWhereInput } from "../../../inputs/VersionGroupPokemonMoveMethodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVersionGroupPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereInput, {
    nullable: true
  })
  where?: VersionGroupPokemonMoveMethodWhereInput | undefined;
}
