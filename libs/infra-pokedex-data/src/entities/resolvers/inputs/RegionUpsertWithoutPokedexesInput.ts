import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutPokedexesInput } from "../inputs/RegionCreateWithoutPokedexesInput";
import { RegionUpdateWithoutPokedexesInput } from "../inputs/RegionUpdateWithoutPokedexesInput";
import { RegionWhereInput } from "../inputs/RegionWhereInput";

@TypeGraphQL.InputType("RegionUpsertWithoutPokedexesInput", {})
export class RegionUpsertWithoutPokedexesInput {
  @TypeGraphQL.Field(_type => RegionUpdateWithoutPokedexesInput, {
    nullable: false
  })
  update!: RegionUpdateWithoutPokedexesInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutPokedexesInput, {
    nullable: false
  })
  create!: RegionCreateWithoutPokedexesInput;

  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;
}
