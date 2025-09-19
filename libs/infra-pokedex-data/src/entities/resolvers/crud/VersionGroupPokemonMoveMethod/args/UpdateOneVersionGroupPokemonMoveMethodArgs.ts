import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodUpdateInput } from "../../../inputs/VersionGroupPokemonMoveMethodUpdateInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../../../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVersionGroupPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodUpdateInput, {
    nullable: false
  })
  data!: VersionGroupPokemonMoveMethodUpdateInput;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupPokemonMoveMethodWhereUniqueInput;
}
