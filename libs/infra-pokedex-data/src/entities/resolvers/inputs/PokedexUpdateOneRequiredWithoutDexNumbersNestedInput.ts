import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateOrConnectWithoutDexNumbersInput } from "../inputs/PokedexCreateOrConnectWithoutDexNumbersInput";
import { PokedexCreateWithoutDexNumbersInput } from "../inputs/PokedexCreateWithoutDexNumbersInput";
import { PokedexUpdateToOneWithWhereWithoutDexNumbersInput } from "../inputs/PokedexUpdateToOneWithWhereWithoutDexNumbersInput";
import { PokedexUpsertWithoutDexNumbersInput } from "../inputs/PokedexUpsertWithoutDexNumbersInput";
import { PokedexWhereUniqueInput } from "../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.InputType("PokedexUpdateOneRequiredWithoutDexNumbersNestedInput", {})
export class PokedexUpdateOneRequiredWithoutDexNumbersNestedInput {
  @TypeGraphQL.Field(_type => PokedexCreateWithoutDexNumbersInput, {
    nullable: true
  })
  create?: PokedexCreateWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokedexCreateOrConnectWithoutDexNumbersInput, {
    nullable: true
  })
  connectOrCreate?: PokedexCreateOrConnectWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokedexUpsertWithoutDexNumbersInput, {
    nullable: true
  })
  upsert?: PokedexUpsertWithoutDexNumbersInput | undefined;

  @TypeGraphQL.Field(_type => PokedexWhereUniqueInput, {
    nullable: true
  })
  connect?: PokedexWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokedexUpdateToOneWithWhereWithoutDexNumbersInput, {
    nullable: true
  })
  update?: PokedexUpdateToOneWithWhereWithoutDexNumbersInput | undefined;
}
