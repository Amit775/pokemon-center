import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GendersCreateOrConnectWithoutEvolutionInput } from "../inputs/GendersCreateOrConnectWithoutEvolutionInput";
import { GendersCreateWithoutEvolutionInput } from "../inputs/GendersCreateWithoutEvolutionInput";
import { GendersWhereUniqueInput } from "../inputs/GendersWhereUniqueInput";

@TypeGraphQL.InputType("GendersCreateNestedOneWithoutEvolutionInput", {})
export class GendersCreateNestedOneWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => GendersCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: GendersCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => GendersCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: GendersCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => GendersWhereUniqueInput, {
    nullable: true
  })
  connect?: GendersWhereUniqueInput | undefined;
}
