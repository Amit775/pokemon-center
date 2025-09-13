import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateWithoutPokedexesInput } from "../inputs/RegionsCreateWithoutPokedexesInput";
import { RegionsWhereUniqueInput } from "../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.InputType("RegionsCreateOrConnectWithoutPokedexesInput", {})
export class RegionsCreateOrConnectWithoutPokedexesInput {
  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionsCreateWithoutPokedexesInput, {
    nullable: false
  })
  create!: RegionsCreateWithoutPokedexesInput;
}
