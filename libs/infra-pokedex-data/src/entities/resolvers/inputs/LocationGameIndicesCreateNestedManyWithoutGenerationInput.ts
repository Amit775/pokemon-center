import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesCreateManyGenerationInputEnvelope } from "../inputs/LocationGameIndicesCreateManyGenerationInputEnvelope";
import { LocationGameIndicesCreateOrConnectWithoutGenerationInput } from "../inputs/LocationGameIndicesCreateOrConnectWithoutGenerationInput";
import { LocationGameIndicesCreateWithoutGenerationInput } from "../inputs/LocationGameIndicesCreateWithoutGenerationInput";
import { LocationGameIndicesWhereUniqueInput } from "../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndicesCreateNestedManyWithoutGenerationInput", {})
export class LocationGameIndicesCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [LocationGameIndicesCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: LocationGameIndicesCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: LocationGameIndicesCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: LocationGameIndicesCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationGameIndicesWhereUniqueInput[] | undefined;
}
