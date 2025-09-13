import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexesOrderByWithRelationInput } from "../../../inputs/PokedexesOrderByWithRelationInput";
import { PokedexesWhereInput } from "../../../inputs/PokedexesWhereInput";
import { PokedexesWhereUniqueInput } from "../../../inputs/PokedexesWhereUniqueInput";
import { PokedexesScalarFieldEnum } from "../../../../enums/PokedexesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPokedexesOrThrowArgs {
  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  where?: PokedexesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokedexesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokedexesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokedexesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokedexesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "region_id" | "identifier" | "is_main_series"> | undefined;
}
