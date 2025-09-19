import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateWithoutDexNumbersInput } from "../inputs/PokedexCreateWithoutDexNumbersInput";
import { PokedexUpdateWithoutDexNumbersInput } from "../inputs/PokedexUpdateWithoutDexNumbersInput";
import { PokedexWhereInput } from "../inputs/PokedexWhereInput";

@TypeGraphQL.InputType("PokedexUpsertWithoutDexNumbersInput", {})
export class PokedexUpsertWithoutDexNumbersInput {
  @TypeGraphQL.Field(_type => PokedexUpdateWithoutDexNumbersInput, {
    nullable: false
  })
  update!: PokedexUpdateWithoutDexNumbersInput;

  @TypeGraphQL.Field(_type => PokedexCreateWithoutDexNumbersInput, {
    nullable: false
  })
  create!: PokedexCreateWithoutDexNumbersInput;

  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  where?: PokedexWhereInput | undefined;
}
