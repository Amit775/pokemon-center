import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput";
import { PokemonMoveMethodsCreateWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodsCreateWithoutVersionGroupsInput";
import { PokemonMoveMethodsUpdateToOneWithWhereWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodsUpdateToOneWithWhereWithoutVersionGroupsInput";
import { PokemonMoveMethodsUpsertWithoutVersionGroupsInput } from "../inputs/PokemonMoveMethodsUpsertWithoutVersionGroupsInput";
import { PokemonMoveMethodsWhereUniqueInput } from "../inputs/PokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput", {})
export class PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateWithoutVersionGroupsInput, {
    nullable: true
  })
  create?: PokemonMoveMethodsCreateWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpsertWithoutVersionGroupsInput, {
    nullable: true
  })
  upsert?: PokemonMoveMethodsUpsertWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonMoveMethodsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateToOneWithWhereWithoutVersionGroupsInput, {
    nullable: true
  })
  update?: PokemonMoveMethodsUpdateToOneWithWhereWithoutVersionGroupsInput | undefined;
}
