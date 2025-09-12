import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateWithoutDexNumbersInput } from "../inputs/PokedexesCreateWithoutDexNumbersInput";
import { PokedexesUpdateWithoutDexNumbersInput } from "../inputs/PokedexesUpdateWithoutDexNumbersInput";
import { PokedexesWhereInput } from "../inputs/PokedexesWhereInput";

@TypeGraphQL.InputType("PokedexesUpsertWithoutDexNumbersInput", {})
export class PokedexesUpsertWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => PokedexesUpdateWithoutDexNumbersInput, {
    nullable: false
  })
  update!: PokedexesUpdateWithoutDexNumbersInput;

  @TypeGraphQL.Field(_type => PokedexesCreateWithoutDexNumbersInput, {
    nullable: false
  })
  create!: PokedexesCreateWithoutDexNumbersInput;

  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  where?: PokedexesWhereInput | undefined;
}
