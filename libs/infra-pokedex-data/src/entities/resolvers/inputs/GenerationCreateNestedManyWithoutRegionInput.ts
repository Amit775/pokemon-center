import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateManyRegionInputEnvelope } from "../inputs/GenerationCreateManyRegionInputEnvelope";
import { GenerationCreateOrConnectWithoutRegionInput } from "../inputs/GenerationCreateOrConnectWithoutRegionInput";
import { GenerationCreateWithoutRegionInput } from "../inputs/GenerationCreateWithoutRegionInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateNestedManyWithoutRegionInput", {})
export class GenerationCreateNestedManyWithoutRegionInput {
  @TypeGraphQL.Field(_type => [GenerationCreateWithoutRegionInput], {
    nullable: true
  })
  create?: GenerationCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: GenerationCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: GenerationCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GenerationWhereUniqueInput], {
    nullable: true
  })
  connect?: GenerationWhereUniqueInput[] | undefined;
}
