import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateManyRegionInput } from "../inputs/GenerationCreateManyRegionInput";

@TypeGraphQL.InputType("GenerationCreateManyRegionInputEnvelope", {})
export class GenerationCreateManyRegionInputEnvelope {
  @TypeGraphQL.Field(_type => [GenerationCreateManyRegionInput], {
    nullable: false
  })
  data!: GenerationCreateManyRegionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
