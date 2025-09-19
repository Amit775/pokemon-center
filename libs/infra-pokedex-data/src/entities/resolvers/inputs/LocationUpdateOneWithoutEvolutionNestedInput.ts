import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutEvolutionInput } from "../inputs/LocationCreateOrConnectWithoutEvolutionInput";
import { LocationCreateWithoutEvolutionInput } from "../inputs/LocationCreateWithoutEvolutionInput";
import { LocationUpdateToOneWithWhereWithoutEvolutionInput } from "../inputs/LocationUpdateToOneWithWhereWithoutEvolutionInput";
import { LocationUpsertWithoutEvolutionInput } from "../inputs/LocationUpsertWithoutEvolutionInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpdateOneWithoutEvolutionNestedInput", {})
export class LocationUpdateOneWithoutEvolutionNestedInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: LocationCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpsertWithoutEvolutionInput, {
    nullable: true
  })
  upsert?: LocationUpsertWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  disconnect?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  delete?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateToOneWithWhereWithoutEvolutionInput, {
    nullable: true
  })
  update?: LocationUpdateToOneWithWhereWithoutEvolutionInput | undefined;
}
