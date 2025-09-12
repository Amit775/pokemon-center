import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateManyRegionInput } from "../inputs/GenerationsCreateManyRegionInput";

@TypeGraphQL.InputType("GenerationsCreateManyRegionInputEnvelope", {})
export class GenerationsCreateManyRegionInputEnvelope {
  @TypeGraphQL.Field(_type => [GenerationsCreateManyRegionInput], {
    nullable: false
  })
  data!: GenerationsCreateManyRegionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
