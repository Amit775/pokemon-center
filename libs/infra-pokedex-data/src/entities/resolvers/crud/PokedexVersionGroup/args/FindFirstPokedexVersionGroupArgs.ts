import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupOrderByWithRelationInput } from "../../../inputs/PokedexVersionGroupOrderByWithRelationInput";
import { PokedexVersionGroupWhereInput } from "../../../inputs/PokedexVersionGroupWhereInput";
import { PokedexVersionGroupWhereUniqueInput } from "../../../inputs/PokedexVersionGroupWhereUniqueInput";
import { PokedexVersionGroupScalarFieldEnum } from "../../../../enums/PokedexVersionGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPokedexVersionGroupArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereInput, {
    nullable: true
  })
  where?: PokedexVersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokedexVersionGroupOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokedexVersionGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pokedex_id" | "version_group_id"> | undefined;
}
