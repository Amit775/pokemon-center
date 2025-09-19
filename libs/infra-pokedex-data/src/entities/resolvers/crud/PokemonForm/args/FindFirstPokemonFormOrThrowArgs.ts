import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormOrderByWithRelationInput } from "../../../inputs/PokemonFormOrderByWithRelationInput";
import { PokemonFormWhereInput } from "../../../inputs/PokemonFormWhereInput";
import { PokemonFormWhereUniqueInput } from "../../../inputs/PokemonFormWhereUniqueInput";
import { PokemonFormScalarFieldEnum } from "../../../../enums/PokemonFormScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPokemonFormOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  where?: PokemonFormWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonFormOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonFormWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonFormScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "form_identifier" | "pokemon_id" | "introduced_in_version_group_id" | "is_default" | "is_battle_only" | "is_mega" | "form_order" | "order"> | undefined;
}
