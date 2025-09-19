import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateOrConnectWithoutTypesInput } from "../inputs/PokemonFormCreateOrConnectWithoutTypesInput";
import { PokemonFormCreateWithoutTypesInput } from "../inputs/PokemonFormCreateWithoutTypesInput";
import { PokemonFormUpdateToOneWithWhereWithoutTypesInput } from "../inputs/PokemonFormUpdateToOneWithWhereWithoutTypesInput";
import { PokemonFormUpsertWithoutTypesInput } from "../inputs/PokemonFormUpsertWithoutTypesInput";
import { PokemonFormWhereUniqueInput } from "../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormUpdateOneRequiredWithoutTypesNestedInput", {})
export class PokemonFormUpdateOneRequiredWithoutTypesNestedInput {
  @TypeGraphQL.Field(_type => PokemonFormCreateWithoutTypesInput, {
    nullable: true
  })
  create?: PokemonFormCreateWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormCreateOrConnectWithoutTypesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonFormCreateOrConnectWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormUpsertWithoutTypesInput, {
    nullable: true
  })
  upsert?: PokemonFormUpsertWithoutTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonFormWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormUpdateToOneWithWhereWithoutTypesInput, {
    nullable: true
  })
  update?: PokemonFormUpdateToOneWithWhereWithoutTypesInput | undefined;
}
