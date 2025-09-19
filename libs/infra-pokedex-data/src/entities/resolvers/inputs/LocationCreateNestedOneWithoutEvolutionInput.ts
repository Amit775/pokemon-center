import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutEvolutionInput } from "../inputs/LocationCreateOrConnectWithoutEvolutionInput";
import { LocationCreateWithoutEvolutionInput } from "../inputs/LocationCreateWithoutEvolutionInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateNestedOneWithoutEvolutionInput", {})
export class LocationCreateNestedOneWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: LocationCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;
}
