import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutGenerationsInput } from "../inputs/RegionCreateWithoutGenerationsInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateOrConnectWithoutGenerationsInput", {})
export class RegionCreateOrConnectWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutGenerationsInput, {
    nullable: false
  })
  create!: RegionCreateWithoutGenerationsInput;
}
