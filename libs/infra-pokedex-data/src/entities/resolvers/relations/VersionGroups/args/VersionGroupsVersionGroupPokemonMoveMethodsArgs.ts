import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodsOrderByWithRelationInput } from "../../../inputs/VersionGroupPokemonMoveMethodsOrderByWithRelationInput";
import { VersionGroupPokemonMoveMethodsWhereInput } from "../../../inputs/VersionGroupPokemonMoveMethodsWhereInput";
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from "../../../inputs/VersionGroupPokemonMoveMethodsWhereUniqueInput";
import { VersionGroupPokemonMoveMethodsScalarFieldEnum } from "../../../../enums/VersionGroupPokemonMoveMethodsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class VersionGroupsVersionGroupPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereInput, {
    nullable: true
  })
  where?: VersionGroupPokemonMoveMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VersionGroupPokemonMoveMethodsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsWhereUniqueInput, {
    nullable: true
  })
  cursor?: VersionGroupPokemonMoveMethodsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"version_group_id" | "pokemon_move_method_id"> | undefined;
}
