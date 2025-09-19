import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexUpdateWithoutVersionGroupsInput } from "../inputs/PokedexUpdateWithoutVersionGroupsInput";
import { PokedexWhereInput } from "../inputs/PokedexWhereInput";

@TypeGraphQL.InputType("PokedexUpdateToOneWithWhereWithoutVersionGroupsInput", {})
export class PokedexUpdateToOneWithWhereWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  where?: PokedexWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokedexUpdateWithoutVersionGroupsInput, {
    nullable: false
  })
  data!: PokedexUpdateWithoutVersionGroupsInput;
}
