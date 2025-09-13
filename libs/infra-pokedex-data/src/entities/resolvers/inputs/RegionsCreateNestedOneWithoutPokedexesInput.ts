import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateOrConnectWithoutPokedexesInput } from "../inputs/RegionsCreateOrConnectWithoutPokedexesInput";
import { RegionsCreateWithoutPokedexesInput } from "../inputs/RegionsCreateWithoutPokedexesInput";
import { RegionsWhereUniqueInput } from "../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.InputType("RegionsCreateNestedOneWithoutPokedexesInput", {})
export class RegionsCreateNestedOneWithoutPokedexesInput {
  @TypeGraphQL.Field(_type => RegionsCreateWithoutPokedexesInput, {
    nullable: true
  })
  create?: RegionsCreateWithoutPokedexesInput | undefined;

  @TypeGraphQL.Field(_type => RegionsCreateOrConnectWithoutPokedexesInput, {
    nullable: true
  })
  connectOrCreate?: RegionsCreateOrConnectWithoutPokedexesInput | undefined;

  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionsWhereUniqueInput | undefined;
}
