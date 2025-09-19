import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutFormsInput } from "../inputs/PokemonCreateOrConnectWithoutFormsInput";
import { PokemonCreateWithoutFormsInput } from "../inputs/PokemonCreateWithoutFormsInput";
import { PokemonUpdateToOneWithWhereWithoutFormsInput } from "../inputs/PokemonUpdateToOneWithWhereWithoutFormsInput";
import { PokemonUpsertWithoutFormsInput } from "../inputs/PokemonUpsertWithoutFormsInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateOneRequiredWithoutFormsNestedInput", {})
export class PokemonUpdateOneRequiredWithoutFormsNestedInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutFormsInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutFormsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutFormsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutFormsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpsertWithoutFormsInput, {
    nullable: true
  })
  upsert?: PokemonUpsertWithoutFormsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateToOneWithWhereWithoutFormsInput, {
    nullable: true
  })
  update?: PokemonUpdateToOneWithWhereWithoutFormsInput | undefined;
}
