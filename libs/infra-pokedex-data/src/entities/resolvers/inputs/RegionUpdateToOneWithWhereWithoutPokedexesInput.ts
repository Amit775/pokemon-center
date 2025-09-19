import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionUpdateWithoutPokedexesInput } from "../inputs/RegionUpdateWithoutPokedexesInput";
import { RegionWhereInput } from "../inputs/RegionWhereInput";

@TypeGraphQL.InputType("RegionUpdateToOneWithWhereWithoutPokedexesInput", {})
export class RegionUpdateToOneWithWhereWithoutPokedexesInput {
  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateWithoutPokedexesInput, {
    nullable: false
  })
  data!: RegionUpdateWithoutPokedexesInput;
}
