import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodsUpdateInput } from "../../../inputs/VersionGroupPokemonMoveMethodsUpdateInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../../../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVersionGroupPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsUpdateInput, {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodsUpdateInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodsWhereUniqueInput;
}
