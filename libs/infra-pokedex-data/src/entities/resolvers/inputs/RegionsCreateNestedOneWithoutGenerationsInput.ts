import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateOrConnectWithoutGenerationsInput } from "../inputs/RegionsCreateOrConnectWithoutGenerationsInput";
import { RegionsCreateWithoutGenerationsInput } from "../inputs/RegionsCreateWithoutGenerationsInput";
import { RegionsWhereUniqueInput } from "../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.InputType("RegionsCreateNestedOneWithoutGenerationsInput", {})
export class RegionsCreateNestedOneWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => RegionsCreateWithoutGenerationsInput, {
    nullable: true
  })
  create?: RegionsCreateWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsCreateOrConnectWithoutGenerationsInput, {
    nullable: true
  })
  connectOrCreate?: RegionsCreateOrConnectWithoutGenerationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionsWhereUniqueInput | undefined;
}
