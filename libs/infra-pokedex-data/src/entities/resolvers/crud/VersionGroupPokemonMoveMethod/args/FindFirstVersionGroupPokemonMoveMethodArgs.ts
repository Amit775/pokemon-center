import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupPokemonMoveMethodOrderByWithRelationInput } from "../../../inputs/VersionGroupPokemonMoveMethodOrderByWithRelationInput";
import { VersionGroupPokemonMoveMethodWhereInput } from "../../../inputs/VersionGroupPokemonMoveMethodWhereInput";
import { VersionGroupPokemonMoveMethodWhereUniqueInput } from "../../../inputs/VersionGroupPokemonMoveMethodWhereUniqueInput";
import { VersionGroupPokemonMoveMethodScalarFieldEnum } from "../../../../enums/VersionGroupPokemonMoveMethodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstVersionGroupPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereInput, {
    nullable: true
  })
  where?: VersionGroupPokemonMoveMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VersionGroupPokemonMoveMethodOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodWhereUniqueInput, {
    nullable: true
  })
  cursor?: VersionGroupPokemonMoveMethodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupPokemonMoveMethodScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"version_group_id" | "pokemon_move_method_id"> | undefined;
}
