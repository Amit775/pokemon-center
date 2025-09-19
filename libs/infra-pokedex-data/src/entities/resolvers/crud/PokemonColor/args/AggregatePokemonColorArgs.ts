import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorOrderByWithRelationInput } from "../../../inputs/PokemonColorOrderByWithRelationInput";
import { PokemonColorWhereInput } from "../../../inputs/PokemonColorWhereInput";
import { PokemonColorWhereUniqueInput } from "../../../inputs/PokemonColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonColorArgs {
  @TypeGraphQL.Field(_type => PokemonColorWhereInput, {
    nullable: true
  })
  where?: PokemonColorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonColorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonColorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonColorWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonColorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
