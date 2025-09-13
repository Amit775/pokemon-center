import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GendersCreateWithoutEvolutionInput } from "../inputs/GendersCreateWithoutEvolutionInput";
import { GendersWhereUniqueInput } from "../inputs/GendersWhereUniqueInput";

@TypeGraphQL.InputType("GendersCreateOrConnectWithoutEvolutionInput", {})
export class GendersCreateOrConnectWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => GendersWhereUniqueInput, {
    nullable: false
  })
  where!: GendersWhereUniqueInput;

  @TypeGraphQL.Field(_type => GendersCreateWithoutEvolutionInput, {
    nullable: false
  })
  create!: GendersCreateWithoutEvolutionInput;
}
