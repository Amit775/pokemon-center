import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodOrderByWithRelationInput } from "../../../inputs/PokemonMoveMethodOrderByWithRelationInput";
import { PokemonMoveMethodWhereInput } from "../../../inputs/PokemonMoveMethodWhereInput";
import { PokemonMoveMethodWhereUniqueInput } from "../../../inputs/PokemonMoveMethodWhereUniqueInput";
import { PokemonMoveMethodScalarFieldEnum } from "../../../../enums/PokemonMoveMethodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonMoveMethodOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonMoveMethodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
