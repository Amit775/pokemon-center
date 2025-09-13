import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateWithoutPokedexesInput } from "../inputs/RegionsCreateWithoutPokedexesInput";
import { RegionsUpdateWithoutPokedexesInput } from "../inputs/RegionsUpdateWithoutPokedexesInput";
import { RegionsWhereInput } from "../inputs/RegionsWhereInput";

@TypeGraphQL.InputType("RegionsUpsertWithoutPokedexesInput", {})
export class RegionsUpsertWithoutPokedexesInput {
  @TypeGraphQL.Field(_type => RegionsUpdateWithoutPokedexesInput, {
    nullable: false
  })
  update!: RegionsUpdateWithoutPokedexesInput;

  @TypeGraphQL.Field(_type => RegionsCreateWithoutPokedexesInput, {
    nullable: false
  })
  create!: RegionsCreateWithoutPokedexesInput;

  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  where?: RegionsWhereInput | undefined;
}
