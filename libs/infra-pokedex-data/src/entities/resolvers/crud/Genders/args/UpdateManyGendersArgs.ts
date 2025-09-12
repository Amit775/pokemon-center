import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GendersUpdateManyMutationInput } from "../../../inputs/GendersUpdateManyMutationInput";
import { GendersWhereInput } from "../../../inputs/GendersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGendersArgs {
  @TypeGraphQL.Field(_type => GendersUpdateManyMutationInput, {
    nullable: false
  })
  data!: GendersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GendersWhereInput, {
    nullable: true
  })
  where?: GendersWhereInput | undefined;
}
