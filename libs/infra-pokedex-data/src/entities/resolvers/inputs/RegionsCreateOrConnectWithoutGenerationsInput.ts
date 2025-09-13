import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateWithoutGenerationsInput } from "../inputs/RegionsCreateWithoutGenerationsInput";
import { RegionsWhereUniqueInput } from "../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.InputType("RegionsCreateOrConnectWithoutGenerationsInput", {})
export class RegionsCreateOrConnectWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionsCreateWithoutGenerationsInput, {
    nullable: false
  })
  create!: RegionsCreateWithoutGenerationsInput;
}
