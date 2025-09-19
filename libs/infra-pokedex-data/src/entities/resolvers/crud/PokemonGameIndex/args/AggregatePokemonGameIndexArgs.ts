import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndexOrderByWithRelationInput } from "../../../inputs/PokemonGameIndexOrderByWithRelationInput";
import { PokemonGameIndexWhereInput } from "../../../inputs/PokemonGameIndexWhereInput";
import { PokemonGameIndexWhereUniqueInput } from "../../../inputs/PokemonGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonGameIndexArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndexWhereInput, {
    nullable: true
  })
  where?: PokemonGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndexOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonGameIndexOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonGameIndexWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
