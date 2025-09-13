import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateOrConnectWithoutEvolutionInput } from "../inputs/LocationsCreateOrConnectWithoutEvolutionInput";
import { LocationsCreateWithoutEvolutionInput } from "../inputs/LocationsCreateWithoutEvolutionInput";
import { LocationsUpdateToOneWithWhereWithoutEvolutionInput } from "../inputs/LocationsUpdateToOneWithWhereWithoutEvolutionInput";
import { LocationsUpsertWithoutEvolutionInput } from "../inputs/LocationsUpsertWithoutEvolutionInput";
import { LocationsWhereInput } from "../inputs/LocationsWhereInput";
import { LocationsWhereUniqueInput } from "../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.InputType("LocationsUpdateOneWithoutEvolutionNestedInput", {})
export class LocationsUpdateOneWithoutEvolutionNestedInput {
  @TypeGraphQL.Field(_type => LocationsCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: LocationsCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => LocationsCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: LocationsCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => LocationsUpsertWithoutEvolutionInput, {
    nullable: true
  })
  upsert?: LocationsUpsertWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  disconnect?: LocationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationsWhereInput, {
    nullable: true
  })
  delete?: LocationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationsUpdateToOneWithWhereWithoutEvolutionInput, {
    nullable: true
  })
  update?: LocationsUpdateToOneWithWhereWithoutEvolutionInput | undefined;
}
