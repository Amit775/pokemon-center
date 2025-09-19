import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionUpdateWithoutGenerationsInput } from "../inputs/RegionUpdateWithoutGenerationsInput";
import { RegionWhereInput } from "../inputs/RegionWhereInput";

@TypeGraphQL.InputType("RegionUpdateToOneWithWhereWithoutGenerationsInput", {})
export class RegionUpdateToOneWithWhereWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  where?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateWithoutGenerationsInput, {
    nullable: false
  })
  data!: RegionUpdateWithoutGenerationsInput;
}
