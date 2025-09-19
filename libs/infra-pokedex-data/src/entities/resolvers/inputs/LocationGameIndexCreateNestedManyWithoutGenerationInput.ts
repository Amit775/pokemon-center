import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexCreateManyGenerationInputEnvelope } from "../inputs/LocationGameIndexCreateManyGenerationInputEnvelope";
import { LocationGameIndexCreateOrConnectWithoutGenerationInput } from "../inputs/LocationGameIndexCreateOrConnectWithoutGenerationInput";
import { LocationGameIndexCreateWithoutGenerationInput } from "../inputs/LocationGameIndexCreateWithoutGenerationInput";
import { LocationGameIndexWhereUniqueInput } from "../inputs/LocationGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndexCreateNestedManyWithoutGenerationInput", {})
export class LocationGameIndexCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [LocationGameIndexCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: LocationGameIndexCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: LocationGameIndexCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: LocationGameIndexCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationGameIndexWhereUniqueInput[] | undefined;
}
