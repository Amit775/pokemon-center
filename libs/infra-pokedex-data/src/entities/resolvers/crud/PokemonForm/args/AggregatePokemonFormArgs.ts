import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormOrderByWithRelationInput } from "../../../inputs/PokemonFormOrderByWithRelationInput";
import { PokemonFormWhereInput } from "../../../inputs/PokemonFormWhereInput";
import { PokemonFormWhereUniqueInput } from "../../../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonFormArgs {
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
}
