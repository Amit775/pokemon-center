import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesUpdateWithoutVersionGroupsInput } from "../inputs/PokedexesUpdateWithoutVersionGroupsInput";
import { PokedexesWhereInput } from "../inputs/PokedexesWhereInput";

@TypeGraphQL.InputType("PokedexesUpdateToOneWithWhereWithoutVersionGroupsInput", {})
export class PokedexesUpdateToOneWithWhereWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokedexesWhereInput, {
    nullable: true
  })
  where?: PokedexesWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  data!: PokedexesUpdateWithoutVersionGroupsInput;
}
