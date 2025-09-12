import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionsUpdateManyMutationInput } from "../../../inputs/RegionsUpdateManyMutationInput";
import { RegionsWhereInput } from "../../../inputs/RegionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRegionsArgs {
  @TypeGraphQL.Field(_type => RegionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: RegionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  where?: RegionsWhereInput | undefined;
}
