import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCountFlavorsArgs } from "./args/BerriesCountFlavorsArgs";

@TypeGraphQL.ObjectType("BerriesCount", {})
export class BerriesCount {
  flavors!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "flavors",
    nullable: false
  })
  getFlavors(@TypeGraphQL.Root() root: BerriesCount, @TypeGraphQL.Args() args: BerriesCountFlavorsArgs): number {
    return root.flavors;
  }
}
